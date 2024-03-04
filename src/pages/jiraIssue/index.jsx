import {signal, effect} from '@preact/signals-react'
import {Button, Flex} from 'antd'
import axios from 'axios'
import "./jiraIssue.less"
const count = signal(0)
const api = axios.create({
    baseURL: 'https://petstore.swagger.io'
})
export default function JiraIssue() {

     const getPet =async (status)=> api(
         {
             url: '/v2/pet/findByStatus',
             method: 'get',
             params: {
                 status
             }
         }
     )

    effect(async ()=>{
        const res = await getPet('available')
        console.log(res)
    })

    return (<Flex gap="small" wrap="wrap">
        <Button type="primary" onClick={() => {
            count.value++
        }}>
            the Count {count}</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>

    </Flex>)
}
