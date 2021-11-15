using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Mastermind.Models
{
    public class Game
    {
        public string Name { get; set; }
        public int NrOfTries { get; set; }
        public string GameId { get; set; }
        public List<string> GeneratedPattern { get; set; }
        public List<Attempt> Attempts { get; set; }

        public Game()
        {
            
        }

        public Game(string name, int nrOfTries, string gameId = null, List<string> generatedPattern = null, List<Attempt> attempts = null)
        {
            Name = name;
            NrOfTries = nrOfTries;
            GameId = gameId;
            GeneratedPattern = generatedPattern;
            Attempts = attempts;
        }
    }
}