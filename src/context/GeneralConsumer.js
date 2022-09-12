import { GeneralContext } from "./GeneralContext";

const GeneralConsumer = (props) => {
    console.log(props)
    return (
        <GeneralContext.Consumer>
            {(value) => {
                console.log('asfsfad');
            }}
        </GeneralContext.Consumer>
    )   
};

export default GeneralConsumer;