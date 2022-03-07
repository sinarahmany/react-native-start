import { View, Text } from "react-native";
import React, { useReducer } from "react";
import ColorCounter from "../Components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {// we can put this inside SquareScreen function but to not confuse it with const [state, ...] we put it outside
  // state === { red:number, green: number, blue: number};
  // action === { colorToChange: 'red || 'green' || 'blue', amount: 15 || -15 } 

  switch (action.colorToChange){
    case 'red':
      return {...state, red: state.red + action.amount};
    case 'green':
      return {...state, green: state.green + action.amount};
    case 'blue':
      return {...state, blue: state.blue + action.amount};
      default:
        return state;
  }
}

const SquareScreen = () => {


  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });

    return (
        <View>
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="Red"
            />
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="Blue"
            />
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="Green"
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                }}
            />
        </View>
    );
};

export default SquareScreen;
