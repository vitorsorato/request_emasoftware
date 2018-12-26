import React, { Component } from 'react';
import {View, Text, ScrollView, StyleSheet, Image, Linking, Button} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

	constructor(props) {
		super(props);

		this.state = { listaItens: [] ,apiResponse:null, isLoading: true};
	}


	

	componentWillMount() {
		fetch('http://portal.ema.net.br/api/configuracoes', { 			//com fetch
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
        .then((responseJson) => {
      
       this.setState({
        color: responseJson.COR,
        });

    }).catch((error) => {
      console.warn(error);
	});	
		axios.post('http://portal.ema.net.br/api/getprocedimentospublicos')		//com axios :)
			.then(response => {
				let keys= Object.keys(response.data)
				this.setState({ listaItens: keys,apiResponse:response.data });
			 	//alert(JSON.stringify(response.data))
			})
			.catch(() => { console.log('Erro ao recuperar os dados'); });
	}

	render() {
		return (
			<View> 
				<ScrollView style={styles.scroll}>
				<View style={[styles.barra, { backgroundColor: this.state.color}]}>
					<Text style={styles.txt}>Portal Ema</Text>
				</View>
				<ScrollView style={{ backgroundColor: '#fff' }}>
				{this.state.listaItens.map(item => (<Itens key={item} item={this.state.apiResponse[item]} />))}
			    </ScrollView>
			</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	barra: {
		flex:1,
		paddingTop:5,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	barend: {
		flexDirection: 'row',
		backgroundColor: 'blue',
		marginLeft: 5,
		marginRight: 5,
		borderRadius: 10,
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 36
	},

	scroll:{
		backgroundColor: '#fff',
		paddingTop: 10,
		paddingBottom: 400,
	},

	txt:{
		marginTop: 5,
		marginBottom: 5,
		fontSize: 24,
		color: '#fff',
		textAlign: 'center'

	}

});

