import './App.css';

function App() {
  var intervalos = [2 , 1.5 , 1.2 , 1 , 0.5 , 0.2 , 0.1 , 0.01];
  const xi = -2;
  const yi = 5;

  return (
    <table>
      <tr className='tbHeader'>
        <td className='headCell'>Δt</td>
        <td className='headCell'>(x ; y)</td>
        <td className='headCell'>d</td>
        <td className='headCell'>Vm</td>
      </tr>

      {intervalos.map((t) => {
        const x = 5 * (t * t) + 3 * t - 2;
        const y = 2 * (t * t * t) + 5;
        const Δx = x - xi;
        const Δy = y - yi;
        const d = Math.sqrt((Δx * Δx) + (Δy + Δy));
        const vm = d / t;

        return (
          <tr>
            <td>{t.toFixed(2) + 's'}</td>
            <td>{`(${x.toFixed(2)} ; ${y.toFixed(2)})`}</td>
            <td>{d.toFixed(2) + 'm'}</td>
            <td>{vm.toFixed(2) + 'm/s'}</td>
          </tr>
        );

        })}
    </table>
  );
}

export default App;