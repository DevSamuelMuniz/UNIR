

export default function S7Socios() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly p-6 lg:p-16 mb-20 gap-8 lg:gap-0">
      
      {/* Card John Alencar */}
      <div className="flex flex-col items-center justify-between gap-4 lg:gap-2 h-auto lg:h-96">
        <img
          className="w-40 lg:w-52"
          src="/Assets/Imgs/s7Socios/john.png"
          alt="Foto de John Alencar, Full Stack Developer & Data Analyst"
          width={200} 
          height={200}
        />
        <h1 className="text-lg lg:text-xl font-bold text-center">
          John Alencar
        </h1>
        <p className="w-60 lg:w-64 text-sm text-center lg:text-left">
          Full Stack Developer & Data Analyst | React.js | Next.js | Node.js |
          Python | Django | Data Analysis
        </p>
      </div>

      {/* Card Samuel Muniz */}
      <div className="flex flex-col items-center justify-between gap-4 lg:gap-2 h-auto lg:h-96">
        <img
          className="w-40 lg:w-52"
          src="/Assets/Imgs/s7Socios/samuel.png"
          alt="Foto de Samuel Muniz, Systems analyst and developer"
          width={200} 
          height={200}
        />
        <h1 className="text-lg lg:text-xl font-bold text-center">
          Samuel Muniz
        </h1>
        <p className="w-60 lg:w-64 text-sm text-center lg:text-left">
          Systems analyst and developer - React.js | Next.js | Angular |
          Typescript | Node | Python | C# dotnet | Flutter | React Native | SQL
          | Mongo | Postgre | Microsoft Azure
        </p>
      </div>

      {/* Card Eudes Jordão */}
      <div className="flex flex-col items-center justify-between gap-4 lg:gap-2 h-auto lg:h-96">
        <img
          className="w-40 lg:w-52"
          src="/Assets/Imgs/s7Socios/eudes.png"
          alt="Foto de Eudes Jordão, Desenvolvedor Full Stack"
          width={200} 
          height={200}
        />
        <h1 className="text-lg lg:text-xl font-bold text-center">
          Eudes Jordão
        </h1>
        <p className="w-60 lg:w-64 text-sm text-center lg:text-left">
          Desenvolvedor Full Stack Angular | React | Java | TypeScript
        </p>
      </div>

    </main>
  );
}
