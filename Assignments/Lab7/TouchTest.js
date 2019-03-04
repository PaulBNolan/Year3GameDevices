/**
 * This Class tests for the presence of a touch device
 */

function is_touch_device() 
{
    return 'ontouchstart' in window;
 }
   