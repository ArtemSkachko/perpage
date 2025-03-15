/**
 * FunFact Component
 * 
 * Displays animated statistics and achievements with fun facts.
 * Features smooth animations and responsive design.
 */

'use client';

import { ReactElement } from 'react';
import { Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import { ALPHA, BORDER_RADIUS, FONT_SIZES, SHADOWS, TRANSITIONS } from '@/lib/constants';

interface Fact {
	icon: ReactElement;
	count: string;
	funFact: string;
	funDescription: string;
}

/** Styled fact card with hover effects */
const FactCard = styled(Paper)(({ theme }) => ({
	padding: '1.5rem',
	borderRadius: BORDER_RADIUS.xl,
	backgroundColor: theme.palette.mode === 'dark'
		? `rgba(255, 255, 255, ${ALPHA.dark.hover})`
		: `rgba(0, 0, 0, ${ALPHA.light.hover})`,
	transition: TRANSITIONS.SMOOTH,
	height: '100%',
	'&:hover': {
		transform: 'translateY(-0.25rem)',
		boxShadow: theme.palette.mode === 'dark'
			? SHADOWS.dark.lg
			: SHADOWS.light.lg,
	},
}));

/** Array of facts and achievements */
export const facts: Fact[] = [
	{
		funFact: 'Mentored Professionals',
		funDescription: 'Enough skills to start your own Avengers team!',
		count: "50+",
		icon: <LocalLibraryIcon color={'primary'} fontSize={'large'}/>
	},
	{
		funFact: 'Successful Projects',
		funDescription: 'Each one is like launching a space mission - complex, exciting, and groundbreaking!',
		count: "25+",
		icon: <RocketLaunchIcon color={'primary'} fontSize={'large'}/>
	},
	{
		funFact: 'Accumulated Work Hours',
		funDescription: 'That\'s equivalent to watching the entire Marvel Cinematic Universe 12,144 times!',
		count: "36'432+",
		icon: <WorkHistoryIcon color={'primary'} fontSize={'large'}/>
	},
	{
		funFact: 'Meeting hours',
		funDescription: 'Like flying around the world and back – twice!',
		count: "6'570+",
		icon: <VideoCallIcon color={'primary'} fontSize={'large'}/>
	},
	{
		funFact: 'Coffee Consumed',
		funDescription: 'That\'s about 797 liters of coffee, or a small swimming pool for kids!',
		count: "15'939+",
		icon: <CoffeeMakerIcon color={'primary'} fontSize={'large'}/>
	},
];

export default function FunFact() {
	const theme = useTheme();

	return (
		<Grid container spacing={2}>
			{facts.map((fact, index) => (
				<Grid 
					key={index}
					{...{
						item: true,
						xs: 12,
						sm: 6,
						md: 4
					}}
				>
					<FactCard elevation={0}>
						<Stack spacing={1.5}>
							{/* Icon */}
							<Stack
								alignItems="center"
								justifyContent="center"
								sx={{
									width: '3rem',
									height: '3rem',
									borderRadius: BORDER_RADIUS.lg,
									backgroundColor: theme.palette.primary.main,
									color: '#fff',
									'& svg': {
										fontSize: '1.5rem',
									},
								}}
							>
								{fact.icon}
							</Stack>

							{/* Count */}
							<Typography
								variant="h3"
								sx={{
									fontSize: FONT_SIZES.h3,
									fontWeight: 700,
									color: theme.palette.primary.main,
								}}
							>
								{fact.count}
							</Typography>

							{/* Fun Fact */}
							<Typography
								variant="h6"
								sx={{
									fontSize: FONT_SIZES.h6,
									fontWeight: 600,
								}}
							>
								{fact.funFact}
							</Typography>

							{/* Description */}
							<Typography
								variant="caption"
								component="p"
								
							>
								
							</Typography>
						</Stack>
					</FactCard>
				</Grid>
			))}
		</Grid>
	);
}