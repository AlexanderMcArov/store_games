import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        "& button": {
            color: 'black',
            padding: '5px 10px',
            fontWeight: 600
        }
    },
    sections: {
        margin: '10px 0px'
    },
    formControl: {
        margin: '5px',
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: '10px',
    },
    isEdit: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: 100,
        background: 'white',
        color: 'black',
        width: 450,
        "& button": {
            color: 'white'
        },
        "& input": {
            width: '100%',
            maxHeight: '250px'
        }
    }
});

export default function ImgMediaCard(props) {

    const [data, setData] = useState(
        {
            src: "https://",
            caption: "Caption",
            discription: "discription",
            discount: 0,
            price: 999,
            section: 1,
            genres: 1,
            category: 1
        }
    )
    const offData = data
    const classes = useStyles();
    const [section, setSection] = React.useState(data.section);
    const [genres, setGenres] = React.useState(data.genres);
    const [category, setCategory] = React.useState(data.category);
    const [isEdit, setIsEdit] = useState(false)

    return (
        <Card className={isEdit ? classes.isEdit : classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={data.src}
                    title="Contemplative Reptile"
                />
                {isEdit ? <input value={data.src} onChange={(e) => setData({ ...data, src: e.target.value })}></input> : ''}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {isEdit ? <input value={data.caption} onChange={(e) => setData({ ...data, caption: e.target.value })}></input> : data.caption}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {isEdit ? <input value={data.discription} onChange={(e) => setData({ ...data, discription: e.target.value })}></input> : data.discription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {isEdit ? <div className={classes.sections}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Раздел</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.section}
                        onChange={(e) => setData({ ...data, section: e.target.value })}
                    >
                        <MenuItem value={1}>Steam</MenuItem>
                        <MenuItem value={2}>Origin</MenuItem>
                        <MenuItem value={3}>Uplay</MenuItem>
                        <MenuItem value={4}>Battle.net</MenuItem>
                        <MenuItem value={5}>Xbox</MenuItem>
                        <MenuItem value={6}>PlayStation</MenuItem>
                        <MenuItem value={7}>Mac OC X</MenuItem>
                        <MenuItem value={8}>Linux + Steam OC</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Жанры</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.genres}
                        onChange={(e) => setData({ ...data, genres: e.target.value })}
                    >
                        <MenuItem value={1}>Экшен</MenuItem>
                        <MenuItem value={2}>Шутеры</MenuItem>
                        <MenuItem value={3}>Приключения</MenuItem>
                        <MenuItem value={4}>Ролевые</MenuItem>
                        <MenuItem value={5}>Инди</MenuItem>
                        <MenuItem value={6}>Симуляторы</MenuItem>
                        <MenuItem value={7}>Стратегии</MenuItem>
                        <MenuItem value={8}>Аркады</MenuItem>
                        <MenuItem value={9}>Спорт и Гонки</MenuItem>
                        <MenuItem value={10}>Казульные</MenuItem>
                        <MenuItem value={11}>Хоррор</MenuItem>
                        <MenuItem value={12}>Выживание</MenuItem>
                        <MenuItem value={13}>Открытый мир</MenuItem>
                        <MenuItem value={14}>С сюжетом</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Категории</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.category}
                        onChange={(e) => setData({ ...data, category: e.target.value })}
                    >
                        <MenuItem value={1}>Одиночная</MenuItem>
                        <MenuItem value={2}>Кооператив</MenuItem>
                        <MenuItem value={3}>Мультиплеер</MenuItem>
                        <MenuItem value={4}>Ранний доступ</MenuItem>
                        <MenuItem value={5}>С достижениями</MenuItem>
                        <MenuItem value={6}>Карточки Steam</MenuItem>
                        <MenuItem value={7}>Контроллер</MenuItem>
                    </Select>
                </FormControl>
            </div> : ''}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {isEdit ? <input value={data.price} onChange={(e) => setData({ ...data, price: parseInt(e.target.value)})}></input> : <span style={{ padding: '0px 5px', fontWeight: 600 }}>Цена: {data.price} Р</span>}
                {isEdit ? <input value={data.discount} onChange={(e) => setData({ ...data, discount: parseInt(e.target.value)})}></input> : <span style={{ padding: '0px 5px', fontWeight: 600 }}>Скидка: {data.discount} %</span>}
                {!isEdit ? <span style={{ padding: '0px 5px', fontWeight: 600 }}>Итог: {parseInt(data.price - (data.price / 100 * data.discount))} Р</span> : ''}
            </div>
            <CardActions>
                {isEdit ?
                    <>
                        <Button size="small" style={{ background: 'rgb(50,150,50)' }} onClick={() => {
                            props.crud(data)
                            setIsEdit(false)
                        }}>OK</Button>
                        <Button size="small" style={{ background: 'rgb(150,50,50)' }} onClick={() => {
                            setData(offData)
                            setIsEdit(false)
                        }}>
                            Cancel</Button>
                    </>
                    :
                    <>
                        <Button size="small" style={{ background: 'rgb(200,100,50)' }} onClick={() => setIsEdit(true)}>EDIT</Button>
                    </>
                }

            </CardActions>
        </Card>
    );
}
