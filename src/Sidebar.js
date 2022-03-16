import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import { makeStyles } from '@material-ui/core/styles';

function Sidebar() {
	const [ { user }, dispatch ] = useStateValue();

	return (
		<div className="sidebar">
			<SidebarRow src={user.photoURL} title={user.displayName} />
			<br />

			<div className="name">
				<b>Built by </b> <br />
				<a href="#">
					{' '}
					<b>Ranvijay Tiwari</b>
				</a>
			</div>
		</div>
	);
}

export default Sidebar;
