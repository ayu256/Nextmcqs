import { Tabs, View } from 'native-base';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';


export default function App()
 {
		return (
			<AppNavigator/>
		);
	}
