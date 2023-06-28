using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BugTracker01.Models;

namespace BugTracker01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketCommentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TicketCommentsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/TicketComments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TicketComment>>> GetTicketComments()
        {
          if (_context.TicketComments == null)
          {
              return NotFound();
          }
            return await _context.TicketComments.ToListAsync();
        }

        // GET: api/TicketComments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TicketComment>> GetTicketComment(int id)
        {
          if (_context.TicketComments == null)
          {
              return NotFound();
          }
            var ticketComment = await _context.TicketComments.FindAsync(id);

            if (ticketComment == null)
            {
                return NotFound();
            }

            return ticketComment;
        }

        // PUT: api/TicketComments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTicketComment(int id, TicketComment ticketComment)
        {
            if (id != ticketComment.Id)
            {
                return BadRequest();
            }

            _context.Entry(ticketComment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TicketCommentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TicketComments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TicketComment>> PostTicketComment(TicketComment ticketComment)
        {
          if (_context.TicketComments == null)
          {
              return Problem("Entity set 'AppDbContext.TicketComments'  is null.");
          }
            _context.TicketComments.Add(ticketComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTicketComment", new { id = ticketComment.Id }, ticketComment);
        }

        // DELETE: api/TicketComments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTicketComment(int id)
        {
            if (_context.TicketComments == null)
            {
                return NotFound();
            }
            var ticketComment = await _context.TicketComments.FindAsync(id);
            if (ticketComment == null)
            {
                return NotFound();
            }

            _context.TicketComments.Remove(ticketComment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TicketCommentExists(int id)
        {
            return (_context.TicketComments?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
