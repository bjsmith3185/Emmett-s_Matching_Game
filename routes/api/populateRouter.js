const router = require("express").Router();
const matchingGameController = require("../../controllers/matchingGameController");


// Matches with "/api/populate"

const matchingSeedArray = [
    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "a",
        image: "https://4.bp.blogspot.com/-sL27hk1Aq30/VxsWEnra7PI/AAAAAAAAE_s/Bp0iEq8srb4m8xQpgbYH1Zh_ylfIicBfACLcB/s320/3dAletter.png"
    },

    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "a",
        image: "https://4.bp.blogspot.com/-sL27hk1Aq30/VxsWEnra7PI/AAAAAAAAE_s/Bp0iEq8srb4m8xQpgbYH1Zh_ylfIicBfACLcB/s320/3dAletter.png"

    },
    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "b",
        image: "https://3.bp.blogspot.com/--qjkLEY-CLo/VxsWIsHb2BI/AAAAAAAAE_w/86yz5MkdSQkUk_pTxDryFwQ3GGrKfAHzwCLcB/s320/3dBletter.png"
    },

    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "b",
        image: "https://3.bp.blogspot.com/--qjkLEY-CLo/VxsWIsHb2BI/AAAAAAAAE_w/86yz5MkdSQkUk_pTxDryFwQ3GGrKfAHzwCLcB/s320/3dBletter.png"
    },

    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "c",
        image: "https://4.bp.blogspot.com/-elNbDyMXaRc/VxsWEYpS4uI/AAAAAAAAE_o/mNtCp07G-voaDBSyR5wkdf5hNoXtGwq8wCLcB/s320/3dCletter.png"
    },
    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "c",
        image: "https://4.bp.blogspot.com/-elNbDyMXaRc/VxsWEYpS4uI/AAAAAAAAE_o/mNtCp07G-voaDBSyR5wkdf5hNoXtGwq8wCLcB/s320/3dCletter.png"
    },
    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "d",
        image: "https://4.bp.blogspot.com/-wj9kkbwiTY4/VxsWezVV14I/AAAAAAAAE_8/zf230hVkYEQ98uGx8jIl-Bk8rNTCgCilACLcB/s320/3dDletter.png"
    },
    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "d",
        image: "https://4.bp.blogspot.com/-wj9kkbwiTY4/VxsWezVV14I/AAAAAAAAE_8/zf230hVkYEQ98uGx8jIl-Bk8rNTCgCilACLcB/s320/3dDletter.png"
    },
//-------------------------
{
    category: "numbers",
    clicked: false,
    matched: false,
    name: "1",
    image: "https://www.goodfreephotos.com/albums/other-photos/numbers/red-number-1.png"
},

{
    category: "numbers",
    clicked: false,
    matched: false,
    name: "1",
    image: "https://www.goodfreephotos.com/albums/other-photos/numbers/red-number-1.png"

},
{
    category: "numbers",
    clicked: false,
    matched: false,
    name: "2",
    image: "https://ttmadrid.com/wp-content/uploads/2016/03/two-1181082_960_720.png"
},

{
    category: "numbers",
    clicked: false,
    matched: false,
    name: "2",
    image: "https://ttmadrid.com/wp-content/uploads/2016/03/two-1181082_960_720.png"
},

{
    category: "numbers",
    clicked: false,
    matched: false,
    name: "3",
    image: "https://www.pngarts.com/files/3/Number-3-PNG-Photo.png"
},
{
    category: "numbers",
    clicked: false,
    matched: false,
    name: "3",
    image: "https://www.pngarts.com/files/3/Number-3-PNG-Photo.png"
},
{
    category: "numbers",
    clicked: false,
    matched: false,
    name: "4",
    image: "https://www.pngarts.com/files/3/4-Number-Transparent-Images.png"
},
{
    category: "numbers",
    clicked: false,
    matched: false,
    name: "4",
    image: "https://www.pngarts.com/files/3/4-Number-Transparent-Images.png"
},

//------------ shapes -------------
{
    category: "shapes",
    clicked: false,
    matched: false,
    name: "circle",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Lol_circle.png"
},

{
    category: "shapes",
    clicked: false,
    matched: false,
    name: "circle",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Lol_circle.png"

},
{
    category: "shapes",
    clicked: false,
    matched: false,
    name: "square",
    image: "http://pluspng.com/img-png/png-square-shape-red-square-shape-clipart-2400.png"
},

{
    category: "shapes",
    clicked: false,
    matched: false,
    name: "square",
    image: "http://pluspng.com/img-png/png-square-shape-red-square-shape-clipart-2400.png"
},

{
    category: "shapes",
    clicked: false,
    matched: false,
    name: "triangle",
    image: "http://lehipreschool.com/wp-content/uploads/2012/08/Green-Triangle.png"
},
{
    category: "shapes",
    clicked: false,
    matched: false,
    name: "triangle",
    image: "http://lehipreschool.com/wp-content/uploads/2012/08/Green-Triangle.png"
},
{
    category: "shapes",
    clicked: false,
    matched: false,
    name: "star",
    image: "https://www.clipartqueen.com/image-files/simple-star-pink.png"
},
{
    category: "shapes",
    clicked: false,
    matched: false,
    name: "star",
    image: "https://www.clipartqueen.com/image-files/simple-star-pink.png"
},

//---------daniel tiger --------

{
    category: "daniel",
    clicked: false,
    matched: false,
    name: "alana",
    image: "https://i.pinimg.com/originals/73/5f/75/735f75cd4aa5c0ec9e8b50fd9a85114f.png"
},

{
    category: "daniel",
    clicked: false,
    matched: false,
    name: "alana",
    image: "https://i.pinimg.com/originals/73/5f/75/735f75cd4aa5c0ec9e8b50fd9a85114f.png"

},
{
    category: "daniel",
    clicked: false,
    matched: false,
    name: "boy",
    image: "https://i.pinimg.com/originals/2f/b5/33/2fb5330d8f0e44c9a902db26ede8ad9b.png"
},

{
    category: "daniel",
    clicked: false,
    matched: false,
    name: "boy",
    image: "https://i.pinimg.com/originals/2f/b5/33/2fb5330d8f0e44c9a902db26ede8ad9b.png"
},

{
    category: "daniel",
    clicked: false,
    matched: false,
    name: "daniel",
    image: "https://dumielauxepices.net/sites/default/files/drawn-tigres-daniel-tiger-580855-945405.png"
},
{
    category: "daniel",
    clicked: false,
    matched: false,
    name: "daniel",
    image: "https://dumielauxepices.net/sites/default/files/drawn-tigres-daniel-tiger-580855-945405.png"
},
{
    category: "daniel",
    clicked: false,
    matched: false,
    name: "family",
    image: "https://i.pinimg.com/originals/37/bb/4c/37bb4ce6f5ce7ad2a2fe20db37841247.png"
},
{
    category: "daniel",
    clicked: false,
    matched: false,
    name: "family",
    image: "https://i.pinimg.com/originals/37/bb/4c/37bb4ce6f5ce7ad2a2fe20db37841247.png"
},

]


router.route("/")
    .post((req, res) => {
        matchingGameController.removeAll()
            .then(dbresults => {

                for (var i = 0; i < matchingSeedArray.length; i++) {
                    matchingGameController.create(matchingSeedArray[i])
                        .then(dbresults => {
                            console.log("deleted and populated matching collection")

                        })
                        .catch(err => res.status(422).json(err))
                }
                res.json(dbresults)
            })
            .catch(err => res.status(422).json(err))
    });


module.exports = router;


