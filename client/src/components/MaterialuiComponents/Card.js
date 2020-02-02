// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { Link } from "react-router-dom";
// import Cookies from 'js-cookie';
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
//   container: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(12, 1fr)',
//     gridGap: theme.spacing(3),
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     whiteSpace: 'nowrap',
//     marginBottom: theme.spacing(1),
//   },
//   divider: {
//     margin: theme.spacing(2, 0),
//   },
// });

// export default function MediaCard(thistitle, thisimage, thistext, thislink) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={thisimage}
//           title={thistitle}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {thistitle}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//         {thistext}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         {/* <Button size="small" color="primary">
//           Share
//         </Button> */}
//         <Button size="small" color="primary">
//         <Link to={thislink}>{thistitle}  </Link>
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }