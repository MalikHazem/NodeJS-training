const validateUser = (body) =>
{
    if(!body.id)
    {
        return "id required"
    }
    else if(!body.name)
    {
        return "name required"
    }
    else if(!body.age || body.age < 18)
    {
        return 'age > 13'
    }
    else if(!body.city)
    {
        return 'city required'
    }
    else
    {
        return false
    }
}

export
{
    validateUser
}