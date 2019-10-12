import * as React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as DocumentPicker from 'expo-document-picker';
import * as Contacts from 'expo-contacts';



export default class ImagePickerExample extends React.Component {
    state = {
        image: null,
    };


    componentDidMount = async () => {

        const { status } = await Permissions.askAsync(Permissions.CONTACTS);
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        }   

        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CONTACTS);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });
        console.log(result);
    }

    _pickDocument = async () => {
        let result = await DocumentPicker.launchImageLibraryAsync({
            mediaTypes: DocumentPicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });
        console.log(result);
    }

    _getContact = async () => {
    const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.FirstName],
        fields: [Contacts.Fields.LastName],
        fields: [Contacts.Fields.Contacts],

      });
      console.log(data)
          if (data.length > 0) {
              const contact = data[0];
              console.log(contact);
          }
    }
      render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Open image pinker"
                    onPress={this._pickImage}
                    />
                <Button
                    title="Open Document pinker"
                    onPress={this._pickDocument}
                    />
                     <Button
                    title="Open Contact pinker"
                    onPress={this._getContact}
                    />
            </View>
        );
    }
    
}

