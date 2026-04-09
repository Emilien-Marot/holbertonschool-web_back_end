#!/usr/bin/env python3
"""
here you go
"""
import typing
import asyncio
import random
from typing import Any, AsyncGenerator


async def async_generator() -> AsyncGenerator[float, Any]:
    """
    here we go
    :param max_delay:
    :return:
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
