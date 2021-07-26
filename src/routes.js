export const Routes = () => {
    return (
        <Switch>
            <MultiLanguageRoute exact path="/"/>
            <MultiLanguageRoute exact path="/:lang" component={Home}/>
            <MultiLanguageRoute exact path="/:lang/posts" component={Posts}/>
            <MultiLanguageRoute exact path="/:lang/posts/:id" component={Post}/>
            <MultiLanguageRoute path="*" component={Page404}/>
        </Switch>
    )
}