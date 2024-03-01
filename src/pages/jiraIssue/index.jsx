import {signal, effect} from '@preact/signals-react'
import {Button, Flex} from 'antd'
import "./jiraIssue.less"
const count = signal(0)
export default function JiraIssue() {

    effect(()=>console.log('hello', count.value))

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