#!/usr/bin/env python3
"""
here you go
"""


async def wait_random(max_delay: int = 10) -> float:
    """
    here we go
    :param max_delay:
    :return:
    """
    import asyncio
    from random import random
    delay: float = max_delay * random()
    await asyncio.sleep(delay)
    return delay
