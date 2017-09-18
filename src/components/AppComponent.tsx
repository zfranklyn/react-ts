import * as React from 'react';

// Component <IComponentProps, IComponentState>
export default class AppComponent extends React.Component <any, any> {

	public constructor(props: any) {
		super(props);
	}

	public render() {
		return (
			<div className="delta-container">
				<h1>Hello World</h1>
			</div>
		);
	}	
}
