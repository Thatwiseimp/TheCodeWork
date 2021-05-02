import React, { Component } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput
} from 'react'
import firebase from 'firebase/app'

export default class PhoneAuth extends Component{
    state = {
        phone: '',
        confirmResult: null,
        verificationCode: '',
        userId: ''
    }
    validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    let res=regexp.test(this.state.phone)
    function handleSendCode(){
        // Request to send OTP
        if (this.validatePhoneNumber()) {
        firebase
            .auth()
            .signInWithPhoneNumber(this.state.phone)
            .then(confirmResult => {
            this.setState({ confirmResult })
            })
            .catch(error => {
            alert(error.message)
            console.log(error)
            })
        } else {
        alert('Invalid Phone Number')
        }
    }

    function changePhoneNumber(){
        this.setState({ confirmResult: null, verificationCode: '' })
    }


    return (
        <SafeAreaView>
            <View >
                <input
                    placeholder='Phone Number with country code'
                    keyboardType='phone-pad'
                    value={this.state.phone}
                    onChangeText={phone => {
                        this.setState({ phone })
                    }}
                    maxLength={15}
                    editable={this.state.confirmResult ? false : true}
                />
                <TouchableOpacity
                    type='button'
                    onPress={
                        this.state.confirmResult
                        ? this.changePhoneNumber
                        : this.handleSendCode
                    }>
                    <Text >
                        {this.state.confirmResult ? 'Change Phone Number' : 'Send Code'}
                    </Text>
                </TouchableOpacity>
                {/* {this.state.confirmResult ? this.renderConfirmationCodeView() : null} */}
            </View>
        </SafeAreaView>
    )
}}