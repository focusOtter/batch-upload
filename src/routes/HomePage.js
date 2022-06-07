import { Flex } from '@aws-amplify/ui-react'
import { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

function HomePage() {
	return (
		<Flex>
			Welcome! I'm just the homepage. To upload files, checkout the admin page
			🙂
		</Flex>
	)
}

export default HomePage
