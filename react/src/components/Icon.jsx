const Icon = (props) => {
  return (
    <svg className={ props.name } style={ props.style } aria-hidden="true">
      <use href={ '#icon-' + props.name } />
    </svg>
  )
}

export default Icon