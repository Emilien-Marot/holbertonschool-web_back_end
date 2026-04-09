#!/usr/bin/env python3
"""
here you go
"""
import typing
import asyncio
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> typing.List[float]:
    """
    there we go
    :return:
    """
    result = []
    async for i in async_generator():
        result.append(i)
    return result
