import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>
        Praktikum Minggu 4
      </Text>
      <Text style={styles.isi}>
        Halaman ini disusun untuk memenuhi pengumpulan tugas praktikum minggu 4
      </Text>
      <View style={styles.container_box}>
      <View style={styles.box}>
      <Text style={styles.box_text}>
        <Text style={styles.judul}>Nama Saya</Text>
        <Text style={styles.nama}>{'\n'}Fahmi Ammry H.I{'\n'}</Text>
        <Text style={styles.judul}>Program Studi</Text>
        <Text style={styles.nama}>{'\n'}Teknologi Informasi{'\n'}</Text>
      </Text>
      </View>
        <View style={styles.box}>
        <Text style={styles.box_text}>
        <Text style={styles.judul}>Nama Panggilan</Text>
        <Text style={styles.nama}>{'\n'}Fahmi{'\n'}</Text>
        </Text>
      </View>
      <View style={styles.box}>
      <Text style={styles.box_text}>
        <Text style={styles.judul}>Nomor Telepon</Text>
        <Text style={styles.nama}>{'\n'}082132601411{'\n'}</Text>
      </Text>
      </View>
      <View style={styles.box}>
      <Text style={styles.box_text}>  
        <Text style={styles.judul}>NIM</Text>
        <Text style={styles.nama}>{'\n'}1202200052{'\n'}</Text>
      </Text>
      </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
paddingTop: Constants.statusBarHeight,
backgroundColor: '#ecf0f1',
padding: 8,
},
judul: {
margin: 24,
fontSize: 20,
fontWeight: '700',
textAlign: 'center',
},
sub_judul:{
  fontSize:16,
},
isi: {
  margin: 24,
  fontSize: 16,
  fontWeight: '700',
  textAlign: 'justify',
},
container_box: {
flex: 1,
alignItems: 'center',
paddingTop: Constants.statusBarHeight,
width: '100%',
},
box: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
width: '85%',
height: 150,
marginBottom: 20,
backgroundColor: '#008080',
},
box_text: {
  flexWrap: 'wrap',
  fontSize: 16,
  textAlign: 'center',
},
nama:{
  fontSize:20,
},

});

