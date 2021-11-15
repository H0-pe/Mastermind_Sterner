using System;
using System.Collections.Generic;
using System.Linq;
using Mastermind.Models;

namespace Mastermind.Services
{
    public class MastermindService
    {
        private List<Game> games = new List<Game>();
        public List<string> Colors { get; } = new List<string>()
        {
            "red", "green", "blue", "yellow", "salmon", "purple"
        };

        public GameResponse StartNewGame(GameDto gameDto)
        {
            var generatedPattern = new List<string>();
            var random = new Random();
            for (int i = 0; i < 4; i++)
            {
                generatedPattern.Add(Colors[random.Next(0, Colors.Count)]);
            }
            var game = new Game()
            {
                Name =gameDto.Name,
                NrOfTries = gameDto.NrOfTries,
                Attempts = new List<Attempt>(),
            };
            game.GeneratedPattern = generatedPattern;
            game.GameId = GenerateRandomString(6);
            games.Add(game);
            Console.WriteLine($"Game {game.GameId} has pattern {game.GeneratedPattern.Aggregate((a,b) => $"{a} - {b}")}");
            return new GameResponse(game.Name, game.NrOfTries, game.GameId, new List<Attempt>());
        }

        private string GenerateRandomString(int length)
        {
            var random = new Random();
            const string chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public AttemptResult SubmitAttempt(string gameId, string[] colors)
        {
            var game = games.First(x => x.GameId.Equals(gameId));
            var correctPattern = game.GeneratedPattern;
            var temp = new string[4];
            correctPattern.CopyTo(temp);
            var correctColors = 0;
            var correctPositions = 0;
            for (int i = 0; i < colors.Length; i++)
            {
                if (temp.Contains(colors[i]))
                {
                    correctColors++;
                    if (colors[i] == temp[i])
                    {
                        correctColors--;
                        correctPositions++;
                    }
                    temp[i] = null;
                }
            }
            

            var result = new AttemptResult()
            {
                CorrectColors = correctColors,
                CorrectPositions = correctPositions
            };
            
            game.Attempts.Add(new Attempt(colors, result));

            return result;
        }

        public GameResponse GetExistingGame(string gameId)
        {
            try
            {
                var game = games.First(x => x.GameId == gameId);
                return new GameResponse(game.Name, game.NrOfTries, game.GameId, game.Attempts);
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}