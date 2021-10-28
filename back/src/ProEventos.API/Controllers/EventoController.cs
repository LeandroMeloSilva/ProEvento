using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        public EventoController(ILogger<EventoController> logger)
        {
    
        }

        [HttpGet]
        public List<Evento> Get()

        {            

            return new List<Evento> (){

           

            new Evento(){

               EventoId= 1,

               Local = "Rincao",

               Tema = "Encontro olhos de Aguia",

               QtdPessoas =20,

               DataEvento= DateTime.Now.AddDays(2).ToString(),

               Lote = "Primeiro lote",

            },

            new Evento(){

               EventoId= 2,

               Local = "Rincao",

               Tema = "Encontro dos motoCar",

               QtdPessoas =150,

               DataEvento= DateTime.Now.AddDays(2).ToString(),

               Lote = "Primeiro lote",

            }

            };

        }
        [HttpPost]
        public string Post()
        {
            return "Estamos no método POST";
        }
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Agora delete com o id={id}";
        }
    }
}