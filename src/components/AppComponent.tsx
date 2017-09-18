import * as React from 'react';
import './AppComponent.scss';

import { Table, Column, Cell } from '@blueprintjs/table';
// Component <IComponentProps, IComponentState>
export default class AppComponent extends React.Component <any, any> {

	public constructor(props: any) {
		super(props);
	}

	public render() {
		return (
			<div className="delta-container">
				<h1>Table Example</h1>
				<Table numRows={3}>
					<Column/>
					<Column/>
					<Column/>
				</Table>
			</div>
		);
	}	
}
