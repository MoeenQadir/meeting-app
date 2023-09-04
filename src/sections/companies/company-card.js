import PropTypes from 'prop-types';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import {Box, Card, CardContent, Divider, Stack, SvgIcon, Typography} from '@mui/material';
import {MdOutlineGroupWork} from "react-icons/md";
import {FiExternalLink} from "react-icons/fi";

export const CompanyCard = (props) => {
    const {company} = props;

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pb: 3
                    }}
                >
                    <MdOutlineGroupWork size={43}/>
                </Box>
                <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                >
                    {company.title}
                </Typography>
                <Typography
                    align="center"
                    variant="body1"
                >
                    {company.description}
                </Typography>
            </CardContent>
            <Box sx={{flexGrow: 1}}/>
            <Divider/>
            <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{p: 2}}
            >
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                >
                    <SvgIcon
                        color="action"
                        fontSize="small"
                    >
                        <ClockIcon/>
                    </SvgIcon>
                    <Typography
                        color="text.secondary"
                        display="inline"
                        variant="body2"
                    >
                        July 10, 2023, 10:00am
                    </Typography>
                </Stack>
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                >
                    <Typography
                        color="text.secondary"
                        display="inline"
                        variant="body2"
                    >
                        <div className={"flex justify-between w-28 items-center"}>
                        Join Meetings <FiExternalLink/>
                        </div>
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    );
};

CompanyCard.propTypes = {
    company: PropTypes.object.isRequired
};
