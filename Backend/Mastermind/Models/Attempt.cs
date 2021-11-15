namespace Mastermind.Models
{
    public class Attempt
    {
        public string[] Colors { get; set; }
        public AttemptResult AttemptResult { get; set; }

        public Attempt(string[] colors, AttemptResult attemptResult)
        {
            Colors = colors;
            AttemptResult = attemptResult;
        }
    }
}