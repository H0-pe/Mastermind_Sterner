using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Mastermind.Models
{
    public class GameDto
    {
        public string Name { get; set; }
        public int NrOfTries { get; set; }


        public GameDto()
        {
            
        }
        
        
        public GameDto(string name, int nrOfTries)
        {
            Name = name;
            NrOfTries = nrOfTries;
        }
    }
}