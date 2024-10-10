export default function S7Socios() {
  return (
    <main className="flex items-center justify-evenly p-16 mb-6">
      <div className="flex flex-col items-center justify-between h-96 gap-2">
        <img className="w-52" src="/Assets/Imgs/S7Socios/john.png" alt="Logo" />
        <h1 className="text-xl font-bold text-center">John Alencar</h1>

        <p className="w-64 text-sm">
          Full Stack Developer & Data Analyst | React.js | Next.js | Node.js |
          Python | Django | Data Analysis
        </p>
      </div>

      <div className="flex flex-col justify-between h-96 items-center gap-2">
        <img
          className="w-52"
          src="/Assets/Imgs/S7Socios/samuel.png"
          alt="Logo"
        />
        <h1 className="text-xl font-bold text-center">Samuel Muniz</h1>

        <p className="w-64 text-sm">
          Systems analyst and developer - React.js | Next.js | Angular |
          Typescript | Node | Python | C# dotnet | Flutter | React Native | SQL
          | Mongo | Postgre | Microsoft Azure
        </p>
      </div>

      <div className="flex flex-col justify-between h-96 items-center gap-2">
        <img
          className="w-52"
          src="/Assets/Imgs/S7Socios/eudes.png"
          alt="Logo"
        />
        <h1 className="text-xl font-bold text-center">Eudes Jordão</h1>

        <p className="w-64 text-sm">
          Desenvolvedor Full Stack Angular | React | Java | TypeScript
        </p>
      </div>
    </main>
  );
}
