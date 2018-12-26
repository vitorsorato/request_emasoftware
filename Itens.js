import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';

export default class Itens extends Component {

  render() {
    return (
			<View onTouchStart={()=>{ Linking.openURL('http://portal.ema.net.br/publico#/processos/iniciar/' + this.props.item.IDPROCEDIMENTO)}} style={styles.item }>
				<View style={styles.foto}>
					<Image style={{ height: 50, width: 50 }} source={{ uri: 'http://portal.ema.net.br/www/doxportal/images/processos/' + this.props.item.FOTO48}} />
				</View>
				<View style={styles.destalhesItem}>
					<Text style={styles.txtTitulo}>{unescape(this.props.item.TIPOPROCEDIMENTO)}</Text>
					<Text style={styles.txtDetalhes}>{unescape(this.props.item.DESCRICAO)}</Text>
				</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#FFF',
		borderWidth: 0.5,
		borderColor: 'blue',
		margin: 10,
		padding: 5,
		flexDirection: 'row',
		borderRadius: 10
	},
	foto: {
		width: 52,
		height: 52,
		margin: 20,
	},
	destalhesItem: {
		marginLeft: 20,
		flex: 1
	},
	txtTitulo: {
		marginTop: 15,
		fontSize: 18,
		color: 'blue',
	},
	txtDetalhes: {
		fontSize: 15
	},
	txtDetm: {
		fontSize: 7,
		padding: 5,
	}

});
