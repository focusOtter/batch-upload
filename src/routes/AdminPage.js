import { Button, TextField } from '@aws-amplify/ui-react'
import React, { useState } from 'react'
import Papa from 'papaparse'

function AdminPage() {
	const [userJSON, setUserJSON] = useState()
	const [uploadedCSV, setUploadedCSV] = useState(null)

	const handleCSVSubmit = (e) => {
		e.preventDefault()

		Papa.parse(uploadedCSV, {
			header: true,
			complete: (results) => {
				console.log({ results })
				setUserJSON(results)
			},
		})
	}

	const handleCSVUpload = (e) => {
		console.log(e.target.files[0])
		setUploadedCSV(e.target.files[0])
	}
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
