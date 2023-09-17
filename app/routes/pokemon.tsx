import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        {title: 'Pokemon!!'},
        { name: 'description', content: 'random pokemon'},
    ]
}