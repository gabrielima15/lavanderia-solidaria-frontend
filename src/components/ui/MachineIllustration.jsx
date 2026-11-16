import './MachineIllustration.css';

export default function MachineIllustration() {
  return (
    <div className="machine-scene" aria-label="Ilustração de uma máquina de lavar roupas" role="img">
      <span className="scene-dot scene-dot--yellow" />
      <span className="scene-dot scene-dot--mint" />
      <div className="machine">
        <div className="machine__top">
          <span className="machine__slot" />
          <span className="machine__button" />
        </div>
        <div className="machine__body">
          <div className="machine__controls"><span /><span /><span /></div>
          <div className="washer-window">
            <div className="washer-water" />
            <div className="washer-cloth washer-cloth--yellow" />
            <div className="washer-cloth washer-cloth--coral" />
          </div>
          <div className="machine__bottom">
            <span>◷</span>
            <span><b>Hoje, 14:00</b><small>Lavagem em andamento</small></span>
          </div>
        </div>
      </div>
      <div className="floating-note">
        <span className="note-check">✓</span>
        <span><b>100% gratuito</b><small>Feito com carinho</small></span>
      </div>
      <div className="machine-shadow" />
    </div>
  );
}
