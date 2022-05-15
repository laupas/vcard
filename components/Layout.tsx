import CSS from 'csstype';

const divStyles: CSS.Properties = {
  margin: 'auto',
  width: "50%",
  padding: '10px',
  fontFamily: 'sans-serif',
  fontSize: '1.5rem',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
};


export default function Layout(props: any) {
  return (
    <><div style={divStyles}>
          {props.children}
    </div>
    </>
  );
}