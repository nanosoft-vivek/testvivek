


import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import styles from './styles';
function ModalOpen(props) {
    return (
        <Modal
            visible={props.data}
        >
            <View style={styles.mainModal}>
                <TouchableOpacity style={styles.ModalCrossView} onPress={() => {
            props.modalStatus(false)
          }} >
                    <Image
                        style={styles.crossimages}
                        resizeMode='contain'
                        source={require('../../images/cross.jpg')}
                    />
                </TouchableOpacity>
                <View style={styles.boxView}>
                    <Image
                        style={styles.boxImage}
                        resizeMode='contain'
                        source={require('../../images/gift-box.png')}
                    />
                    <Text style={styles.boxText}>Free Energy</Text>
                    <Text style={styles.boxDetails}>Invite friends to Ohm. Once they sign up, you'll both get $20 off your next utility bill.</Text>
                    <TouchableOpacity style={styles.inviteTouch}>
                        <Text style={styles.inviteText}> Invite Friends</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    )

}
export default ModalOpen;