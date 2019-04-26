#start new project from cli
gatsby new gatsby-bootcamp https://github.com/gatsbyjs/gatsby-starter-hello-world

#start server/site - develop
gatsby develop

#pages
every file in the src/pages is a page, with the file name as the root/address name, index is homepage.

#moving between pages
<a>will work with full page restart</a>
<Link> from 'getsby' will work without full page restart

#shared components (like navbar shows on every screen)
#without layout
create components directory in src
add each component to each relevant page like React compoennt <Footer/>
#with layout
add layout component, import in each relevant page,
add <Layout>data to render</Layout> and the data as prop
{props.children} return what inside <>here<>

#plugins
plugins index in gatsby site.
install by npm,
add plugin name to gatsby-config in plugins array


#styles
gatsby-plugin-sass
src/styles folder

#npm run develop to add the env qraphql playground

#env
.env file by default not uploading to github since sensitive information stored there.

#upload to production
git status
git add . 
git commit -am "name"