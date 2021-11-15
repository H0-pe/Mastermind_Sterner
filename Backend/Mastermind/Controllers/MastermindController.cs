using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mastermind.Models;
using Mastermind.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mastermind.Controllers
{
    [Route("api/mastermind")]
    [ApiController]
    public class MastermindController : ControllerBase
    {
        private readonly MastermindService _mastermindService;

        public MastermindController(MastermindService mastermindService)
        {
            _mastermindService = mastermindService;
        }
        
        [HttpPost("startNewGame")]
        public IActionResult StartNewGame([FromBody] GameDto gameDto)
        {
            if (string.IsNullOrEmpty(gameDto.Name) || gameDto.NrOfTries < 6 || gameDto.NrOfTries > 12)
                return BadRequest();
            return Ok(_mastermindService.StartNewGame(gameDto));
        }

        [HttpGet("getAvailableColors")]
        public IActionResult GetAvailableColors()
        {
            return Ok(_mastermindService.Colors);
        }

        [HttpPost("submitAttempt/{gameId}")]
        public IActionResult SubmitAttempt([FromBody] string[] colors, string gameId)
        {
            return Ok(_mastermindService.SubmitAttempt(gameId, colors));
        }


        [HttpGet("resumeGame/{gameId}")]
        public IActionResult GetExistingGame(string gameId)
        {
            var existingGame = _mastermindService.GetExistingGame(gameId);
            if (existingGame == null)
                return BadRequest();
            return Ok(existingGame);
        }
    }
}
