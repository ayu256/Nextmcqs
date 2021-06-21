
	import React from 'react'
	import AppNavigator from './navigation/AppNavigator';
	import ErrorBoundary from './App/Components/ErrorBoundary'
	import { GlobalState } from "./App/Hooks/globalState";
	export default class App extends React.Component{
	  render(){
		return(
		  <><ErrorBoundary>
		  <GlobalState>
		  <AppNavigator/>
			</GlobalState>
			</ErrorBoundary>
		  </>
		)
	  }
	}