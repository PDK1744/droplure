"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export default function SendFiles() {
    const [isPasswordProtected, setIsPasswordProtected] = useState(false)
    const [files, setFiles] = useState([])

    return (
        <div className="space-y-6">
            <div className="flex gap-4 flex-wrap">
                <Button className="w-full sm:w-auto">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Files
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    Add Folder
                </Button>
            </div>

            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="recipientEmail">Email To</Label>
                    <Input id="recipientEmail" type="email" placeholder="recipient@example.com" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="senderEmail">Your Email</Label>
                    <Input id="senderEmail" type="email" placeholder="your@email.com" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Transfer title" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Add a message..." />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="expiration">Expiration</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select expiration" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1 day</SelectItem>
                            <SelectItem value="3">3 days</SelectItem>
                            <SelectItem value="7">7 days</SelectItem>
                            <SelectItem value="30">30 days</SelectItem>
                            <SelectItem value="60">60 days</SelectItem>
                            <SelectItem value="365">1 year</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center gap-2">
                    <Switch
                        id="password"
                        checked={isPasswordProtected}
                        onCheckedChange={setIsPasswordProtected}
                    />
                    <Label htmlFor="password">Password protect</Label>
                </div>

                {isPasswordProtected && (
                    <div className="grid gap-2">
                        <Label htmlFor="transferPassword">Password</Label>
                        <Input id="transferPassword" type="password" placeholder="Enter password" />
                    </div>
                )}

                <Button className="w-full sm:w-auto mt-4">
                    Send Files
                </Button>
            </div>
        </div>
    )
}