import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';



const App = () => {


  return (
    <>
      <ScrollView>
        {/* de esta forma le damos estilos al view y solo afecta la imagen si no ocupa tanto un selector*/}
        <View style={{ flexDirection: 'row' }} >
          {/* para colocar imagenes */}
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>

        <View style={styles.contendor}>
          <Text style={styles.titulo}>Que hacer en Paris</Text>

          {/* para hacer el scroll hacia los lados */}
          <ScrollView
            horizontal
          >
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad1.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad2.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad3.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad4.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad5.jpg')}
              />
            </View>


          </ScrollView>

          <Text style={styles.titulo}>Los Mejores Alojamientos</Text>
          <View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./assets/img/mejores1.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.mejores}
                source={require('./assets/img/mejores2.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.mejores}
                source={require('./assets/img/mejores3.jpg')}
              />
            </View>
          </View>

          <Text style={styles.titulo}>Hospedajes en LA</Text>

          <View
            style={styles.listado}
          >
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./assets/img/hospedaje1.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./assets/img/hospedaje2.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./assets/img/hospedaje3.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./assets/img/hospedaje4.jpg')}
              />
            </View>

          </View>

        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1, // con esto y poniendo el view con flexDirection: 'row' logro tomar todo el espacio
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  contendor: {
    marginHorizontal: 10
  },
  ciudad: {
    // para el tamaño de las imagenes
    width: 250,
    height: 300,
    marginRight: 15
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listado: {
    flexDirection: 'row',
    // para colocarlos unos abajos q otros
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem: {
    // esto es lo mismo que un width
    flexBasis: '49%'
  }

});

export default App;
