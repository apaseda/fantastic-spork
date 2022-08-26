interface Props {
    onClick: () => void
}

function Backdrop(props: Props) {
  return <div className="backdrop" onClick={props.onClick}/>;
}

export default Backdrop;
