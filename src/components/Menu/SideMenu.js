import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from "react-native-vector-icons/dist/MaterialIcons";

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Image
                            source={require('../assets/images/shopin.jpg')}
                            style={styles.navBanner}
                            resizeMode="stretch"
                        />

                        <View style={styles.menuTitleContainer}>
                            <Text style={styles.sectionHeadingStyle}>
                                Menu
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.touch}>
                                <Icon
                                    name="home"
                                    size={28}
                                    color="black"
                                    style={styles.icon}
                                />
                                <Text style={styles.navItemStyle}>
                                Home
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.navigateToScreen('AddItems')} style={styles.touch}>
                                <Icon
                                    name="add-shopping-cart"
                                    size={28}
                                    color="black"
                                    style={styles.icon}
                                />
                                <Text style={styles.navItemStyle}>
                                    Add Items
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Text style={styles.myFooter}>Stay SAFE.</Text>
                </View>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;