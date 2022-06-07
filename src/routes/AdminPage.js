import { Button, TextField } from '@aws-amplify/ui-react'
import React from 'react'

function AdminPage() {
	const handleCSVSubmit = () => {}
	const handleCSVUpload = () => {}

	return (
		<form onSubmit={handleCSVSubmit}>
			<TextField
				maxWidth={'300px'}
				type={'file'}
				label="Upload a CSV"
				onChange={handleCSVUpload}
			/>
			<Button type="submit" variation="primary">
				Submit
			</Button>
		</form>
	)
}

export default AdminPage
