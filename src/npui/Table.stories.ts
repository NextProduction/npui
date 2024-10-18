import type {StoryObj} from "@storybook/react"
import Table from "@/components/Table/Table"

const meta = {
    title : "Core/Table",
    component : Table,
    parameters : {
        layout : "centered",
    },
    args : {
        data : [],
        column : []
    }
}

export default meta;
type Story = StoryObj<typeof meta>;


export const Default : Story = {
    args : {
        data : [],
        column : []
    }
}