const Teacher = () => {
  return (
    <div className="teacher boxshadow">
      <div className="boxtitle">Мой куратор</div>
      <div className="desc">
        <span>В любой непонятной ситуации - пиши</span>
        <a href="/">
          <svg><use xlinkHref="/theme/sprite.svg#telegram"></use></svg>
        </a>
      </div>
      <div className="user">
        <div className="ava">
          <img src="/images/teacher.jpg" alt="" />
        </div>
        <div className="name">Константин Константинопольский</div>
      </div>
    </div>
  )
}

export default Teacher