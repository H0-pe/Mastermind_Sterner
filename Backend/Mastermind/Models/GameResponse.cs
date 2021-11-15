using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Mastermind.Models
{
    public class GameResponse
    {
        public string Name { get; set; }
        public int NrOfTries { get; set; }
        public string GameId { get; set; }

        public List<Attempt> Attempts { get; set; }


        public GameResponse(string name, int nrOfTries, string gameId, List<Attempt> attempts)
        {
            Name = name;
            NrOfTries = nrOfTries;
            GameId = gameId;
            Attempts = attempts;
        }
    }
}