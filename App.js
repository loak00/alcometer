import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [promilles, setPromilles] = useState(0);

  const amount = Array();
  amount.push({ label: '1 bottle', value: 1 });
  amount.push({ label: '2 bottles', value: 2 });
  amount.push({ label: '3 bottles', value: 3 });
  amount.push({ label: '4 bottles', value: 4 });
  amount.push({ label: '5 bottles', value: 5 });
  amount.push({ label: '6 bottles', value: 6 });

  const timepast = Array();
  timepast.push({ label: '1 hours', value: 1 });
  timepast.push({ label: '2 hours', value: 2 });
  timepast.push({ label: '3 hours', value: 3 });
  timepast.push({ label: '4 hours', value: 4 });
  timepast.push({ label: '5 hours', value: 5 });
  timepast.push({ label: '6 hours', value: 6 });
  timepast.push({ label: '7 hours', value: 7 });
  timepast.push({ label: '8 hours', value: 8 });
  timepast.push({ label: '9 hours', value: 9 });
  timepast.push({ label: '10 hours', value: 10 });
  timepast.push({ label: '11 hours', value: 11 });
  timepast.push({ label: '12 hours', value: 12 });

  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]
  
  const litres = (bottles * 0.33);
  const grams = (litres * 8 * 4.5);
  const burning = (weight / 10);
  const gramsleft = (grams - burning * time);

  function calculate() {
    let result = 0;
    if (gender === 'male') {
      result = gramsleft / (weight * 0.7);
    }
    else {
      result = gramsleft / (weight * 0.6);
    }
    if (result < 0) {
      result = 0;
    }
    setPromilles(result);
  }

  return (
    <View style={styles.container}>
      <View style={styles.field}>
      <Text style={{fontWeight: "bold"}}>Weight</Text>
        <TextInput style={styles.input}
          onChangeText={text => setWeight(text)}
          placeholder="in kilograms"
          keyboardType='numeric'>
        </TextInput>
      </View>

      <View style={styles.field}>
        <Text>Bottles</Text>
        <Picker
          onValueChange={(itemValue) => setBottles(itemValue)}
          selectedValue={bottles}
        >
          {amount.map((bottles, index) => (
            <Picker.Item key={index} label={bottles.label} value={bottles.value}/>
          )
          )}
        </Picker>
      </View>

      <View style={styles.field}>
        <Text>Time</Text>
        <Picker
          onValueChange={(itemValue) => setTime(itemValue)}
          selectedValue={time}
        >
          {timepast.map((time, index) => (
            <Picker.Item key={index} label={time.label} value={time.value}/>
          )
          )}
        </Picker>
      </View>

      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
          style={styles.radio}
          buttonSize={10}
          radio_props={genders}
          initial={0}
          onPress={(value) => { setGender(value) }}
        />
        <Text style={{fontWeight: "bold"}}>Promilles</Text>
        <Text style={{fontWeight: "bold"}}>{promilles.toFixed(2)}</Text>
      </View>
      <Button onPress={calculate} title="Calculate"></Button>
      <Text style={{color: '#CCCCCC', textAlign: 'center', paddingTop: 20}}>Author: Aki Löthman</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    marginLeft: 50,
    marginRight: 50    
  },
  field: {
    margin: 10
  },
  input: {
    marginLeft: 10
  },
  radio: {
    marginTop: 10,
    marginBottom: 10
  }
});
