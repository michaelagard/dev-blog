# dev-blog
This my personal blog with posts created from Kyle Mathews' [code](https://twitter.com/kylemathews).

[Check it out](https://mdevblog.netlify.com/)

### Running in development
`gatsby develop`

### Note on adding new typography theme
When installing a new typography theme by running ```yarn add [theme]```, build failures will occure during a netlify deploy because the package isn't listed in the ```package.json``` file. Add this dependency manually if needed.