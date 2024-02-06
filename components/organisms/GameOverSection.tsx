import { Score } from "../atoms";

const GameOverSection = () => {
  return (
    <section className="bg-white sm:w-[500px] w-80 h-80 px-4 rounded-md flex flex-col justify-center items-center gap-10">
      <Score />
      <h1 className="text-2xl font-extrabold">Game Over</h1>
      <p className="text-lg">
        Si quieres aprenderte todas las capitales de los paises visita este
        sitio:{" "}
        <a
          className="text-red-500 hover:text-red-700 font-bold"
          href="https://world-geography-games.com/es/capitales_mundo.html"
        >
          Paises y Mapas
        </a>
      </p>

      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
        <a href="/">Volver a jugar</a>
      </button>
    </section>
  );
};

export default GameOverSection;
